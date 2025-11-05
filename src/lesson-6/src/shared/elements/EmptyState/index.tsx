import type { FC } from 'react';

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export const EmptyState: FC<EmptyStateProps> = ({
    title = "No items found",
    description = "There’s nothing here yet. Try creating a new item to get started.",
    actionLabel,
    onAction,
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
            <p className="text-gray-500 text-sm mb-4">{description}</p>
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
};
