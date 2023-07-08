import React from "react";
import {create} from "react-test-renderer";
import Paginator from "./Paginator"

describe ("Paginator component test", () => {
    test("page count is 11 but should be only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let spans = root.findAllByType("button")
        expect(spans.length).toBe(10)
    })

    test("if page count is mpre then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let spans = root.findAllByType("button")
        expect(spans.length).toBe(1)
    })
})