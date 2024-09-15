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
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
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