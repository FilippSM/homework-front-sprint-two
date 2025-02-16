import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        /*         const selectedValue = e.currentTarget.value; // Получаем выбранное значение
        
                // Вызываем onChangeOption, если она передана
                if (onChangeOption) {
                    // Находим опцию по значению и передаём её
                    const selectedOption = options?.find(option => option.id === selectedValue);
                    onChangeOption(selectedOption);
                }
            
                // Вызываем onChange, если она передана
                if (onChange) {
                    onChange(e); // Передаём событие дальше
                } */

        const selectedValue = Number(e.currentTarget.value); // Преобразуем в число

        // Вызываем onChangeOption с id выбранной опции
        if (onChangeOption) {
            onChangeOption(selectedValue); // Передаём id выбранной опции
        }

        // Вызываем onChange, если она передана
        if (onChange) {
            onChange(e); // Передаём событие дальше
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
