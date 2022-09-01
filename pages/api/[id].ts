import { Bin } from '#mvbin/@types/bin';
import { supabase } from '#mvbin/lib/supabase';
import axios from 'axios';
import dayjs from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		const { data } = await supabase
			.from<Bin>('Bin')
			.select()
			.eq('id', req.query.id as string)
			.single();

		if (data && dayjs(data.expiresAt).isBefore(dayjs())) {
			await supabase.from('Bin').delete().eq('id', req.query.id);

			return res.status(200).json(null);
		}

		return res.status(200).json(data);
	}

	if (req.method === 'DELETE') {
		const { data } = await supabase
			.from('Bin')
			.delete()
			.eq('id', req.query.id)
			.single();

		return res.status(200).json(data);
	}

	return res.status(405);
};

export default handler;

export const getBin = (id: string) =>
	axios.get<Bin>(`/api/${id}`).then((res) => res.data);

export const deleteBin = (id: string) =>
	axios.delete<Bin>(`/api/${id}`).then((res) => res.data);
