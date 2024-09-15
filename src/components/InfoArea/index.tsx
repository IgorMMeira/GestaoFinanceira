import * as C from './styles';
import { ResumeItem } from '../ResumeItem';

type Props = {
    income: number;
    expense: number;
}

export const InfoArea = ({ income, expense }: Props) => {

    return (
        <C.Container>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem
                    title="Balanço"
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}