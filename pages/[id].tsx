import CopyButton from '#mvbin/components/CopyButton';
import DeleteButton from '#mvbin/components/DeleteButton';
import NewButton from '#mvbin/components/NewButton';
import TextArea from '#mvbin/components/TextArea';
import { getBin } from '#mvbin/pages/api/[id]';
import { ValueContext } from '#mvbin/pages/_app';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useQuery } from 'react-query';

const Read: NextPage = () => {
	const router = useRouter();
	const { setValue } = useContext(ValueContext);

	const { isLoading } = useQuery(
		['bin', router.query.id as string] as const,
		({ queryKey: [, id] }) => getBin(id),
		{ onSuccess: (res) => setValue(res ? res.content : '404 Not Found') }
	);

	return (
		<>
			<header>
				<h1>MVBIN</h1>
				<div className='actions'>
					{isLoading ? (
						<span>Loading...</span>
					) : (
						<>
							<NewButton />
							<CopyButton />
							<DeleteButton />
						</>
					)}
				</div>
			</header>
			<TextArea mode='read' />
		</>
	);
};

export default Read;
