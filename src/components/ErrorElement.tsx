import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>This was ab error ... </div>
  )
}

export default ErrorElement 