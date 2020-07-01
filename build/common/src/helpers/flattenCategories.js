export default categories => {
  const output = categories.map(item => {
    const newItem = {
      ...item,
      withCategories: item.childrenCategories && item.childrenCategories.length
    }
    delete newItem.childrenCategories
    return newItem
  })

  const clonCategories = [].concat(...categories)

  clonCategories.forEach(motivator => {
    if (motivator.childrenCategories && motivator.childrenCategories.length) {
      motivator.childrenCategories.forEach(categoryLv2 => {
        const newCategoryLv2 = { ...categoryLv2 }
        const withLv3 =
          categoryLv2.childrenCategories &&
          categoryLv2.childrenCategories.length

        delete newCategoryLv2.childrenCategories
        output.push({ ...newCategoryLv2, withCategories: withLv3 })
        if (withLv3) {
          categoryLv2.childrenCategories.forEach(categoryLv3 => {
            const newCategoryLv3 = { ...categoryLv3 }
            delete newCategoryLv3.childrenCategories
            output.push(newCategoryLv3)
          })
        }
      })
    }
  })

  return output
}
