import React, { useState } from 'react'

//{title is props}
function Row({ title }) {
    //react hooks
    const [movies, setMovies] = useState([]);

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    )
}

export default Row
