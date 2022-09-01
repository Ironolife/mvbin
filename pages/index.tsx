import SaveButton from '#mvbin/components/SaveButton';
import TextArea from '#mvbin/components/TextArea';
import { ValueContext } from '#mvbin/pages/_app';
import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';

const Create: NextPage = () => {
	const { setValue } = useContext(ValueContext);

	useEffect(() => {
		setValue('');
	}, []);

	return (
		<>
			<header>
				<h1>MVBIN</h1>
				<div className='actions'>
					<SaveButton />
				</div>
			</header>
			<TextArea mode='create' />
		</>
	);
};

export default Create;
