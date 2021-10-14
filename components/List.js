import * as React from 'react'
import Card from './Card'
import { FlatList } from 'react-native'

const List = ({ data, onPress }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card onPress={onPress} title={item} />}
            keyExtractor={(item) => item}
        />
    )
}

export default List
