import Table from 'react-bootstrap/Table'

function LadderRow ({data}) {
        

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Rating</th>
                    <th>Name</th>
                    <th>Faction</th>
                    <th>W - L</th>
                </tr>
            </thead>
            <tbody>
            {data.map((char) => {
                return (
                <tr>
                    <td>{char.rank}</td>
                    <td>{char.rating}</td>
                    <td>{char.character.name}</td>
                    <td>{char.faction.type}</td>
                    <td>{char.season_match_statistics.won} - {char.season_match_statistics.lost}</td>
                </tr>
                )
            })}
            </tbody>
        </Table>
    )
}

export default LadderRow