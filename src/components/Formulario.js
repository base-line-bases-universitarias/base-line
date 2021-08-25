import React, { useState } from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<Formik
			initialValues={{ nombre: '', correo: '' }}
			validate={(values) => {
				const errors = {};

				if (!values.nombre) {
					errors.nombre = 'El nombre es requerido';
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
					errors.nombre = 'El nombre solo puede contener letras y espacios';
				}

				if (!values.correo) {
					errors.correo = 'Por favor ingresa un correo electronico';
				} else if (
					!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
						values.correo
					)
				) {
					errors.correo =
						'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.';
				}
				return errors;
			}}
			onSubmit={(values, { resetForm }) => {
				resetForm();
				if (values) {
					console.log(values);
				}
				cambiarFormularioEnviado(true);
				setTimeout(() => cambiarFormularioEnviado(false), 5000);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleSubmit,
				handleChange,
				handleBlur,
			}) => (
				<form className='formulario' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='nombre'>Nombre</label>
						<input
							type='text'
							name='nombre'
							placeholder='Nombre'
							id='nombre'
							value={values.nombre}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.nombre && errors.nombre && (
							<div className='error'>{errors.nombre}</div>
						)}
					</div>

					<div>
						<label htmlFor='correo'>Correo</label>
						<input
							type='text'
							name='correo'
							placeholder='Correo'
							id='correo'
							value={values.correo}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.correo && errors.correo && (
							<div className='error'>{errors.correo}</div>
						)}
					</div>

					{formularioEnviado ? (
						<p className='exito'>Formulario enviado con exito!</p>
					) : (
						<button type='submit'>Enviar</button>
					)}
				</form>
			)}
		</Formik>
	);
};

export default Formulario;
