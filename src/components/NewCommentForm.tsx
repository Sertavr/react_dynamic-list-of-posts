import React from 'react';
import { Input } from './Input/Input';
import { ErrorFieldForm } from './ErrorFieldForm/ErrorFieldForm';
import { Fields } from '../types/Fields';
import classNames from 'classnames';

type Props = {
  name: string;
  email: string;
  commentText: string;
  invalidFiels: Fields[];
  errorMessage: string;
  loading: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // addComment: (name: string, email: string, body: string) => void;
  handleChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlChangeTextarea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const NewCommentForm: React.FC<Props> = ({
  loading,
  name,
  email,
  commentText,
  invalidFiels,
  handleChangeName,
  handleChangeEmail,
  handlChangeTextarea,
  handleSubmit,
}) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [commentText, setCommentText] = useState('');
  // const [invalidFiels, setInvalidFields] = useState<Fields[]>([]);

  // const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  //   if (invalidFiels.includes('name')) {
  //     setInvalidFields(prevFields =>
  //       [...prevFields].filter(field => field !== 'name'),
  //     );
  //   }
  // };

  // console.log(email);

  // const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  //   if (invalidFiels.includes('email')) {
  //     setInvalidFields(prevFields =>
  //       [...prevFields].filter(field => field !== 'email'),
  //     );
  //   }
  // };

  // const handlChangeTextarea = (
  //   event: React.ChangeEvent<HTMLTextAreaElement>,
  // ) => {
  //   setCommentText(event.target.value);
  //   if (invalidFiels.includes('textarea')) {
  //     setInvalidFields(prevFields =>
  //       [...prevFields].filter(field => field !== 'textarea'),
  //     );
  //   }
  // };

  // const validationFildsForm = () => {
  //   if (!name.trim()) {
  //     setInvalidFields(prevFields => [...prevFields, 'name']);
  //   }

  //   if (!email.trim()) {
  //     setInvalidFields(prevFields => [...prevFields, 'email']);
  //   }

  //   if (!commentText.trim()) {
  //     setInvalidFields(prevFields => [...prevFields, 'textarea']);
  //   }
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setInvalidFields([]);
  //   if (!name.trim() || !email.trim() || !commentText.trim()) {
  //     validationFildsForm();

  //     return;
  //   }

  //   addComment(name, email, commentText);
  //   setCommentText('');
  // };

  return (
    <form data-cy="NewCommentForm" onSubmit={handleSubmit}>
      <div className="field" data-cy="NameField">
        <label className="label" htmlFor="comment-author-name">
          Author Name
        </label>

        <div className="control has-icons-left has-icons-right">
          <Input
            type="text"
            name="name"
            id="comment-author-name"
            placeholder="Name Surname"
            className={
              invalidFiels.includes('name') ? 'input is-danger' : 'input'
            }
            value={name}
            handleChange={handleChangeName}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>

          {invalidFiels.includes('name') && <ErrorFieldForm />}
        </div>

        {invalidFiels.includes('name') && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Name is required
          </p>
        )}
      </div>

      <div className="field" data-cy="EmailField">
        <label className="label" htmlFor="comment-author-email">
          Author Email
        </label>

        <div className="control has-icons-left has-icons-right">
          <Input
            type="text"
            name="email"
            id="comment-author-email"
            placeholder="email@test.com"
            className={
              invalidFiels.includes('email') ? 'input is-danger' : 'input'
            }
            value={email}
            handleChange={handleChangeEmail}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>

          {invalidFiels.includes('email') && <ErrorFieldForm />}
        </div>

        {invalidFiels.includes('email') && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Email is required
          </p>
        )}
      </div>

      <div className="field" data-cy="BodyField">
        <label className="label" htmlFor="comment-body">
          Comment Text
        </label>

        <div className="control">
          <textarea
            id="comment-body"
            name="body"
            placeholder="Type comment here"
            className={
              invalidFiels.includes('textarea')
                ? 'textarea is-danger'
                : 'textarea'
            }
            value={commentText}
            onChange={handlChangeTextarea}
          />
        </div>

        {invalidFiels.includes('textarea') && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Enter some text
          </p>
        )}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            className={classNames('button is-link', {
              'is-loading': loading === 'addComment',
            })}
          >
            Add
          </button>
        </div>

        <div className="control">
          {/* eslint-disable-next-line react/button-has-type */}
          <button type="reset" className="button is-link is-light">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
