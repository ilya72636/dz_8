import React, { useRef } from 'react';

const UserForm = () => {
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleCreate = () => {
    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;

    const newUser = {
      name: name,
      username: username,
      email: email,
    };

    console.log('Новый пользователь:', newUser);
  };

  return (
    <div>
      <h2>Форма создания пользователя</h2>
      <div>
        <label>
          Имя:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Имя пользователя:
          <input type="text" ref={usernameRef} />
        </label>
      </div>
      <div>
        <label>
          Электронная почта:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <button onClick={handleCreate}>Создать</button>
    </div>
  );
};

export default UserForm;
