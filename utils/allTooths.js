export function allTooths(data) {
    const result = {}
    data.forEach( ds => {
        if(result['tooth']) {
            result.tooth = [...result.tooth, ds.tooth]
        } else {
            result.tooth = [ds.tooth]
        }
    })
    return result
}