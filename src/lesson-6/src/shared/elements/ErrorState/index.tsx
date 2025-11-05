import { AlertOutlined } from '@ant-design/icons';
import { type FC } from "react";

interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

export const ErrorState: FC<ErrorStateProps> = ({
    title = "Something went wrong",
    message = "We couldn’t load the data. Please try again later.",
    onRetry,
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-10 px-4 text-gray-600">
            <AlertOutlined />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
            <p className="text-sm text-gray-500 mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
                >
                    Retry
                </button>
            )}
        </div>
    );
};
