# Design System Example

A react-native and react library to expose a small example of a Design System project.

## Installation

```bash
npm install --save-dev pvansi-design-system-example
```

## Usage

The library exposes a set of components and constants that could be use either by a react-native app or a react app.

For the case of a react app you should do a couple of extra steps in order to make it work properly, to do so you should take a look at the [react-native-web documentation.](https://necolas.github.io/react-native-web/) Specifically the [Setup part.](https://necolas.github.io/react-native-web/docs/setup/)

For react-native it would be a matter of using the library as is. It should work with expo or the react-native cli.

### Colors

The library exposes the set of colors defined in [the rebranding page](https://design.fintual.com/proyectos/rebranding/) and could be used as part of any react component or a react-native style.

#### React

```typescript
import {Colors} from 'pvansi-design-system-example'

const ButtonComponent = () => {
    return <button style={{backgroundColor: Colors.horizonBlue, color: Colors.clearWords}}>Tomar foto</button>
}
```

#### React Native

```typescript
import {Colors} from 'pvansi-design-system-example'
import {Button, StyleSheet} from 'react-native'

const ButtonComponent = () => {
    return <Button style={styles.button} title={"Tomar foto"}/>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.horizonBlue,
        color: Colors.clearWords
    }
})
```

### Typography

The library is designed to use the `Poppins` font as in [the rebranding page](https://design.fintual.com/proyectos/rebranding/).

> Note: In order to use the required font you should install the font for your platform.
>
> You can find the font [here](https://fonts.google.com/specimen/Poppins).
>
> For example if you are using react-native with expo, you should download the font files and use the `expo-font` plugin.

Then you could use the `Typography` constants as follow

#### React

```typescript
import {Typography} from 'pvansi-design-system-example'

const TextComponent = () => {
    return <p style={{...Typography.body1}}>This is a text with body1 typography</p>
}
```

#### React Native

```typescript
import {Typography} from 'pvansi-design-system-example'
import {Text, StyleSheet} from 'react-native'

const TextComponent = () => {
    return (<Text style={styles.text}>This is a text with body1 typography</Text>)
}

const styles = StyleSheet.create({
    text: {
        ...Typography.body1
    }
})
```

### Components

Finally in order to avoid having to import the `Typography` constants each time, the library exposes a set of components that already contemplate the `Typography`

```typescript
import {Title, Body, Caption} from 'pvansi-design-system-example'
import {View} from 'react-native'

const TypographyComponent = () => {
    return (
        <View>
            <Title>This is a title text</Title>
            <Body>This is a body text</Body>
            <Caption>This is a caption text</Caption>
        </View>
        )
}
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE)
