// InputField.tsx
const InputField = ({
    label,
    value,
    setValue,
    labelClassName = '', // Default to an empty string if no class is provided
  }: {
    label: string;
    value: string;
    setValue: (val: string) => void;
    labelClassName?: string; // Optional class for label styling
  }) => (
    <div className="mb-4">
      <label className={`block text-sm font-medium text-gray-700 ${labelClassName}`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );