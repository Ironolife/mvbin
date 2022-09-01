import { ValueContext } from '#mvbin/pages/_app';
import { useContext } from 'react';

type TextAreaProps = {
	mode: 'create' | 'read';
};

const TextArea = ({ mode }: TextAreaProps) => {
	const { value, setValue } = useContext(ValueContext);

	return (
		<textarea
			value={value}
			onChange={(ev) => setValue(ev.target.value)}
			readOnly={mode === 'read'}
		/>
	);
};

export default TextArea;
