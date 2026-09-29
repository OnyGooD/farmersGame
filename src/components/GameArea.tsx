import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { useMapStore } from '../store/useMapStore'
import { mapQueryOptions } from '../store/mapQueryOptions'
import Tile from './Tile'

const GameArea = () => {

    const { data } = useSuspenseQuery(mapQueryOptions())

    return (
        <div className='gameArea' style={{ gridTemplateColumns: `repeat(${data?.length}, 1fr)` }}>
            {data?.map((row, rowIdx) =>
                row.map((tile, colIdx) => <Tile tile={tile} rowIdx={rowIdx} colIdx={colIdx}/>))
            }
        </div>
    )
}

export default GameArea