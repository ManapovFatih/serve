import React, { memo, useState } from "react";
import Eye from "../svg/Eye";
import CloseEye from "../svg/CloseEye";
import ReactInputMask from "react-input-mask";
// import CheckMark from '../svg/CheckMark'

const Input = memo(
  ({
    onFocus,
    onClick,
    onChange,
    type,
    label,
    className,
    mask = false,
    maskChar,
    defaultValue,
    placeholder,
    name,
    autoFocus,
    register,
    readOnly,
    validation,
    minLength = 0,
    maxLength = 250,
    errors,
  }) => {
    const [visible, setVisibility] = useState(false);
    return (
      <fieldset className={"labeled-input " + className}>
        {type === "password" ? (
          <div className="password">
            <input
              onClick={onClick}
              onFocus={onFocus}
              readOnly={readOnly}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              type={visible ? "text" : "password"}
              autoComplete="current-password"
              minLength={minLength}
              maxLength={maxLength}
              required
              placeholder={placeholder}
              onChange={(e) =>
                onChange && !register && onChange(e.target.value)
              }
              {...(register && { ...register(name, validation) })}
            />
            <button type="button" onClick={() => setVisibility(!visible)}>
              {visible ? <Eye /> : <CloseEye />}
            </button>
          </div>
        ) : mask ? (
          <ReactInputMask
            onClick={onClick}
            onFocus={onFocus}
            readOnly={readOnly}
            autoFocus={autoFocus}
            maskChar={maskChar}
            mask={mask}
            type={type}
            required
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={(e) =>
              onChange && !register && onChange(e.target.value)
            }
            {...(register && { ...register(name, validation) })}
          />
        ) : (
          <input
            onClick={onClick}
            onFocus={onFocus}
            readOnly={readOnly}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            type={type}
            minLength={minLength}
            maxLength={maxLength}
            required
            placeholder={placeholder}
            onChange={(e) =>
              onChange && !register && onChange(e.target.value)
            }
            {...(register && { ...register(name, validation) })}
          />
        )}
        <legend>{label}</legend>

        {errors && (
          <p className="error-text">{errors[name]?.message}</p>
        )}
      </fieldset>
    );
  }
);

export default Input;
