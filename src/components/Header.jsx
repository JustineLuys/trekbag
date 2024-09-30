/* eslint-disable react/prop-types */
import Counter from './Counter'
import Logo from './Logo'

export default function Header({ totalNumberOfItems, numbersOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numbersOfItemsPacked={numbersOfItemsPacked}
      />
    </header>
  )
}
