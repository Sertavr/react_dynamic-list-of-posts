import React, { useEffect, useRef, useState } from 'react';
import { User } from '../types/User';
import { UserLink } from './User/UserLink';
import classNames from 'classnames';

type Props = {
  selectedUser: number | null;
  handleSelectUser: (id: number) => void;
  users: User[];
};

export const UserSelector: React.FC<Props> = ({
  users,
  handleSelectUser,
  selectedUser,
}) => {
  const [isActive, setIsActive] = useState(false);

  const refButton = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.control-close')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleUserClick = (id: number) => {
    handleSelectUser(id);
    setIsActive(!isActive);
  };

  return (
    <div
      data-cy="UserSelector"
      className={classNames('dropdown', { 'is-active': isActive })}
    >
      <div className="dropdown-trigger">
        <button
          ref={refButton}
          type="button"
          className="button control-close"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsActive(!isActive)}
        >
          <span>
            {users.find(user => user.id === selectedUser)?.name ||
              'Choose a user'}
          </span>

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => (
            <UserLink
              handleUserClick={handleUserClick}
              selectedUser={selectedUser}
              name={user.name}
              id={user.id}
              key={user.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
