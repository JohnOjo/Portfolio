export const generateFireFlies = () => {
    const circles = new Array(20).fill(null)
    return circles?.map((circle, index) => {
        return(
            <div className={'circle-container'} key={index}>
                <div className={'circle'}></div>
            </div>
        )
    })
}
