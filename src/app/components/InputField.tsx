export type InputFieldProps = {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    autoComplete?: string;
    required?: boolean;
    disabled?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
    id,
    type,
    label,
    placeholder,
    value,
    onChange,
    autoComplete,
    required,
    disabled,
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-semibold text-gray-500">
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                required={required}
                disabled={disabled}
                className="rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );
};