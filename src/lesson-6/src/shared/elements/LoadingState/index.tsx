import type { FC } from 'react';

export const LoadingState: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium">Loading...</p>
        </div>
    );
};