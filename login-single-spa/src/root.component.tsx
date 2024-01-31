import { useState, useEffect } from 'react';
import { auth$ as auth, login } from "@crafted-solutions/common/auth";
import Loader from './loader';

export default function Root(props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let timeout;
    const sub = auth.subscribe(({ pending, error }) => {
      setPending(pending);
      setError(error as string);
      timeout = setTimeout(() => {
        setError(undefined);
      }, 2000);
    });
    return () => {
      clearTimeout(timeout);
      sub.unsubscribe();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <form name="login" className="login-form" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <button type="submit" className="submit" disabled={pending}>
            {pending ? <Loader /> : 'Submit'}
          </button>
        </div>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
}
