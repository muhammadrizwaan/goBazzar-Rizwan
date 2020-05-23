import React from "react"
import { Container, List } from 'native-base'

import CategoryListItem from './CategoryListItem'
import categories from '../../Samples/all-categories'

export default ({ catalogs }) => (
    <List style={{paddingHorizontal: 10}}>
        {
            catalogs.map(category => (
                <CategoryListItem
                    key={category.id}
                    category={category}
                />
            ))
        }
    </List>
)