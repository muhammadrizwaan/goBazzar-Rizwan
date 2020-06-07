import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Button } from "native-base"
import CompareItemCard from "./CompareItemCard"

class CompareCollabisble extends React.Component {
    state = {
        isContentVisible: false
    }
    handleContentVisible = () => {
        this.setState({
            isContentVisible: !this.state.isContentVisible
        })
    }
    render() {
        const { 
            categoryName, products, 
            handleRemoveProductFromCompare, categoryId,
            handleCompareButtonClick
        } = this.props;
        const { isContentVisible } = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handleContentVisible}>
                    <Text style={styles.categoryNameStyle}>
                        {categoryName}
                        <Text style={{ color: "#8daf00" }}>{` (${products.length})`}</Text>
                    </Text>
                </TouchableOpacity>
                {isContentVisible && <View>
                    {products.map(product => (
                        <CompareItemCard
                            key={product.ID}
                            product={product}
                            categoryId={categoryId}
                            handleRemoveProductFromCompare={handleRemoveProductFromCompare}
                        />
                    ))}

                    <Button
                        transparent
                        full
                        style={{
                            width: "70%",
                            alignSelf: "center",
                            backgroundColor: "#ff9800",
                            height: 36,
                            borderRadius: 20,
                            marginTop: 25
                        }}
                        onPress={() => handleCompareButtonClick(products)}
                    >
                        <Text 
                            style={{
                                fontSize: 12,
                                fontFamily: "LexendDeca-Regular",
                                // fontFamily: "Poppins-Bold",
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Compare
                        </Text>
                    </Button>
                </View>}


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 5,
    },
    categoryNameStyle: {
        fontSize: 13,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F"
    }
})

export default CompareCollabisble