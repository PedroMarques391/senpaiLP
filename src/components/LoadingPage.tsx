export const LoadingPage = (): React.JSX.Element => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-white mb-4"></div>
            </div>
        </div>
    );
};