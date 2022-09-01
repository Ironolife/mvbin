import { Bin } from '#mvbin/@types/bin';
import { supabase } from '#mvbin/lib/supabase';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

const getId = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 4);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { data } = await supabase
			.from('Bin')
			.insert([
				{
					id: getId(),
					expiresAt: dayjs().add(1, 'day').toDate(),
					content: req.body.content,
				},
			])
			.single();

		return res.status(200).json(data);
	}

	return res.status(405);
};

export default handler;

export const postBin = (content: string) =>
	axios.post<Bin>(`/api/save`, { content }).then((res) => res.data);
