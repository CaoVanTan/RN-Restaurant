import React from 'react';
import { Button } from 'react-native-paper';

import { theme } from '../../constants/theme';

function MyButton({
    mode = 'outlined',
    title = 'text here',
    sx,
    color = 'primary',
    disabled,
    small = false,
    ...props
}) {
    /// This is func for pick variant size of button
    const isOutled = mode.includes('outlined') ? theme.colors[color] : theme.colors.secondary;

    return (
        <Button
            contentStyle={{ height: small ? 40 : 55 }}
            style={{
                borderRadius: 8,
                borderColor: disabled ? theme.colors.backdrop : isOutled,
                ...sx,
            }}
            mode={mode}
            buttonColor={mode.includes('outlined') ? theme.colors.background : theme.colors[color]}
            textColor={mode.includes('outlined') ? theme.colors[color] : theme.colors.white}
            uppercase={false}
            disabled={disabled}
            labelStyle={{
                fontSize: 18,
                fontWeight: 'bold',
            }}
            {...props}
        >
            {title}
        </Button>
    );
}

export default MyButton;
