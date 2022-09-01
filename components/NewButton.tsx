import { useRouter } from 'next/router';

const NewButton = () => {
	const router = useRouter();

	const handleNew = () => {
		router.push(`/`);
	};

	return (
		<button className='new-button' onClick={handleNew}>
			New
		</button>
	);
};

export default NewButton;
