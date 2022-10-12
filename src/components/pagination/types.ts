import React from "react";
import { BaseTypeProps } from "../../utils";

export interface PaginationDataParams {
    /**
     * 当前页
     * @en Current page
     */
    current: number;
    /**
     * 每页条数
     * @en Number of items per page
     */
    pageSize: number;
    /**
     * 总页数
     * @en Total number of pages
     */
    pageNum: number;
}

export interface PaginationProps extends  BaseTypeProps {
    /**
     * 上一页文字
     */
    prevFieldText?: string;
    /**
     * 下一页文字
     */
    nextFieldText?: string;
    /**
     * 是否显示ICON
     */
    icon?: boolean | React.ReactNode | [React.ReactNode, React.ReactNode];
    /**
     * 翻页按钮水平位置，side表示两端对齐，center表示居中对齐
     * @default "side"
     */
    justify?: 'center' | 'side';
    /**
     * 当前页码
     * @en Current page
     * @default 1
     */
    current?: number;
    /**
      * 每页条数
      * @en Number of items per page
      * @default 10
      */
    pageSize?: number;
    /**
      * 数据总条数
      * @en Total number of data source
      * @default 0
      */
    total?: number;
    /**
     * 只有一页时是否隐藏分页器
     * @en Whether to hide the pager when there is only one page
     * @default false
     */
    hideOnOnePage?: boolean;
    /**
     * 渲染前翻页按钮
     * @en Custom render previous page button
     */
    renderPrevField?: (data: PaginationDataParams) => React.ReactNode;
     /**
      * 渲染后翻页按钮
      * @en Custom render next page button
      */
    renderNextField?: (data: PaginationDataParams) => React.ReactNode;
     /**
      * 点击前/后翻页按钮时调用
      * @en Callback called when the previous/next page button is clicked
      */
    onChange?: (data: PaginationDataParams) => void;
}