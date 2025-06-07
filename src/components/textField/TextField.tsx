
type textFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: textFieldProps) => {
    return (
        <>
            <input type="text" {...props} className="input-style" />
        </>
    )
}

export default TextField;