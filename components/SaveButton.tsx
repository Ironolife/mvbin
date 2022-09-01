import { postBin } from '#mvbin/pages/api/save';
import { ValueContext } from '#mvbin/pages/_app';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useMutation } from 'react-query';

const SaveButton = () => {
	const { value } = useContext(ValueContext);
	const postBinMutation = useMutation(postBin);
	const router = useRouter();

	const handleSave = () => {
		postBinMutation.mutate(value, {
			onSuccess: (res) => {
				router.push(`/${res.id}`);
			},
		});
	};

	return (
		<button
			className='save-button'
			onClick={handleSave}
			disabled={value === ''}
		>
			Save
		</button>
	);
};

export default SaveButton;
