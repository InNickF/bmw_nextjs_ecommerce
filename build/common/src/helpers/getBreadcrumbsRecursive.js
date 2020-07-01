export default function getBreadcrumbsRecursive (
  categoryId,
  categories = [],
  accumulator = [],
  categoriesPath = []
) {
  if (!categoryId || !categories.length) {
    return { breadcrumbs: [...accumulator], categoriesPath }
  }

  const category = categories.find(item => item.id === categoryId)

  if (!category) {
    return {
      breadcrumbs: [...accumulator]
        .sort((a, b) => a.parentId - b.parentId)
        .reduce(
          (list, { id, name, slug, level, parentId }) => [
            ...list,
            {
              key: id,
              label: name,
              route: `/productos?c=${slug}&level=${level}${
                parentId === 0 ? '' : `&parentId=${parentId}`
              }`,
              params: {
                c: slug
              }
            }
          ],
          []
        ),
      categoriesPath: categoriesPath.concat(categoryId)
    }
  }

  const parent = categories.find(item => item.id === category.parentId)

  if (category.isMotivator || parent.id === categoryId) {
    return {
      breadcrumbs: [...accumulator, category]
        .sort((a, b) => a.parentId - b.parentId)
        .reduce(
          (list, { id, name, slug, level, parentId }) => [
            ...list,
            {
              key: id,
              label: name,
              route: `/productos?c=${slug}&level=${level}${
                parentId === 0 ? '' : `&parentId=${parentId}`
              }`,
              params: {
                c: slug
              }
            }
          ],
          []
        ),
      categoriesPath: categoriesPath.concat(categoryId)
    }
  }
  return getBreadcrumbsRecursive(
    parent.id,
    categories,
    [...accumulator, category],
    categoriesPath.concat(category.id)
  )
}
