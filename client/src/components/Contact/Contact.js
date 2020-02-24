import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        name="Name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="email"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea name="Message" ref={register} />

      <input type="submit" />
    </form>
  );
}
