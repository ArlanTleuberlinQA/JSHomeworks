var num = pm.collectionVariables.get("number")
if (!num){
    num = ["","0-19-852663","978-1-4612-9090-21","0-19-852663-7","0-19-852663-6"]
}
var curentIndex = num.shift()
pm.collectionVariables.set("curentIndex",curentIndex)
pm.collectionVariables.set("number",num)