export const LoadingPage = (): React.JSX.Element => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50">
            <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-white mb-4"></div>
            </div>
        </div>
    );
};