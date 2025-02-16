import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        /*  const selectedValue = e.currentTarget.value;
 
         // Вызываем onChangeOption, если она передана
         if (onChangeOption) {
             const selectedOption = options?.find(option => option.id === selectedValue);
             onChangeOption(selectedOption);
         }
 
         // Вызываем onChange, если она передана
         if (onChange) {
             onChange(e);
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

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    name={name} // Устанавливаем имя радиокнопок
                    value={o.id} // Устанавливаем значение
                    checked={value === o.id} // Проверяем, является ли это выбранной опцией
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                    {o.value}
                </span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
