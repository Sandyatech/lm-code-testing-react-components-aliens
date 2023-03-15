interface ErrorMessageProps {
	errorMessage?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({errorMessage}) => (
	<div>
		<p>{errorMessage}</p>
	</div>);

export default ErrorMessage;