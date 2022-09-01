import { ValueContext } from '#mvbin/pages/_app';
import { useContext } from 'react';

const CopyButton = () => {
	const { value } = useContext(ValueContext);

	const handleCopy = () => {
		navigator.clipboard.writeText(value);
	};

	return (
		<button className='copy-button' onClick={handleCopy}>
			Copy
		</button>
	);
};

export default CopyButton;
