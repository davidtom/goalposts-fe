// NOTE: these functions are no longer being used, but leaving here in case I
// need them again at some point

function sortTitleAscending(highlights){
  // sorting is done in place - copy to new array first
  const highlightsCopy = [].concat(highlights)
  return highlightsCopy.sort(function(a,b){
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
    }
  )
}

function sortTitleDescending(highlights){
  // sorting is done in place - copy to new array first
  const highlightsCopy = [].concat(highlights)
  return highlightsCopy.sort(function(a,b){
    if (a.title < b.title)
      return 1;
    if (a.title > b.title)
      return -1;
    return 0;
    }
  )
}

export {sortTitleAscending}
export {sortTitleDescending}
