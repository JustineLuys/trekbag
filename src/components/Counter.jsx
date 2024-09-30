/* eslint-disable react/prop-types */
export default function Counter({ totalNumberOfItems, numbersOfItemsPacked }) {
  return (
    <p>
      <b>{numbersOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  )
}
