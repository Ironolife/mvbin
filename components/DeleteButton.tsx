import { deleteBin } from '#mvbin/pages/api/[id]';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const DeleteButton = () => {
	const deleteBinMutation = useMutation(deleteBin);
	const router = useRouter();

	const handleDelete = () => {
		deleteBinMutation.mutate(router.query.id as string, {
			onSuccess: () => {
				router.push(`/`);
			},
		});
	};

	return (
		<button className='delete-button' onClick={handleDelete}>
			Delete
		</button>
	);
};

export default DeleteButton;
