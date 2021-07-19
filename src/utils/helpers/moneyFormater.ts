export default function moneyFormater(money: string | number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })

  return formatter.format(+money).replace(',00', '')
}
