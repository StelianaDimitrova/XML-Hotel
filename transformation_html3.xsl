<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Меню в ресторанта на хотела</h1>
                <table border="4" align="center">
                    <tr>
                        <th>Категория</th>
                        <th>Име</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Грамаж</th>
                    </tr>
                    <xsl:for-each select="hotel/restaurant/menu/dish">
                        <tr>
                            <td><xsl:call-template name="category"/></td>
                            <td><xsl:call-template name="food_name"/></td>
                            <td><xsl:call-template name="description"/></td>
                            <td><xsl:call-template name="price_of_dish"/></td>
                            <td><xsl:call-template name="amount"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="category">
        <xsl:value-of select="category/."/>
    </xsl:template>

    <xsl:template name="food_name">
        <xsl:value-of select="food_name/."/>
    </xsl:template>

    <xsl:template name="description">
        <xsl:value-of select="description/."/>
    </xsl:template>

    <xsl:template name="price_of_dish">
        <xsl:value-of select="price_of_dish/."/>
        <xsl:value-of select="price_of_dish/@currency"/>
    </xsl:template>

    <xsl:template name="amount">
        <xsl:value-of select="amount/."/>
    </xsl:template>

</xsl:stylesheet>