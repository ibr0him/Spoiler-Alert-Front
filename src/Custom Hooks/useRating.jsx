import { useMemo } from "react";

const useRating = (movies) => {
    
    const { low, avg, high } = useMemo(() => {
        if (!movies|| movies.length === 0) 
            return { low: null, avg: null, high: null };

        const sorted = [...movies].sort((a, b) => a.vote_average - b.vote_average);

        const total = movies.reduce((sum, movie) => sum + (movie.vote_average || 0), 0);
        const averageValue = total / movies.length;

        const avgMovie = movies.reduce((prev, curr) => {
            return Math.abs(curr.vote_average - averageValue) < Math.abs(prev.vote_average - averageValue)
                ? curr
                : prev;
        });

        return {
            low: sorted[0],
            avg: avgMovie,
            high: sorted[sorted.length - 1],
        };
    }, [movies]);

    return [low, avg, high];
};

export default useRating;