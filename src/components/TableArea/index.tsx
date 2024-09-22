import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
    onRemove: (index: number) => void
    onUpdate: (index: number, values: Item) => void
}

export const TableArea = ({ list, onRemove, onUpdate }: Props) => {
    console.log(list)
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn as="th" width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn as="th" width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn as="th">Título</C.TableHeadColumn>
                    <C.TableHeadColumn as="th" width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem
                        key={index}
                        index={index}
                        item={item}
                        onRemove={onRemove}
                        onUpdate={onUpdate} />
                ))}
            </tbody>
        </C.Table>
    );
}