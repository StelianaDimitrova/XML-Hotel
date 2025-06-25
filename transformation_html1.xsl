<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Стаи</h1>
                <table border="3" align="center">
                    <tr>
                        <th>Номер</th>
                        <th>Тип</th>
                        <th>Цена</th>
                    </tr>
                    <xsl:for-each select="hotel/room">
                        <tr>
                            <td><xsl:call-template name="number"/></td>
                            <td><xsl:value-of select="@type"/></td>
                            <td><xsl:call-template name="price"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="number">
        <xsl:value-of select="number/."/>
    </xsl:template>

    <xsl:template name="price">
        <xsl:value-of select="price/."/>
        <xsl:value-of select="price/@currency"/>
    </xsl:template>

</xsl:stylesheet>