<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Зали</h1>
                <table border="4" align="center">
                    <tr>
                        <th>Име</th>
                        <th>Описание</th>
                        <th>Работно време</th>
                        <th>Капацитет</th>
                    </tr>
                    <xsl:for-each select="hotel/hall">
                        <tr>
                            <td><xsl:call-template name="name"/></td>
                            <td><xsl:call-template name="note"/></td>
                            <td><xsl:call-template name="work_time"/></td>
                            <td><xsl:call-template name="capacity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="name">
        <xsl:value-of select="name/."/>
    </xsl:template>

    <xsl:template name="note">
        <xsl:value-of select="note/."/>
    </xsl:template>

    <xsl:template name="work_time">
        <xsl:value-of select="work_time/."/>
    </xsl:template>

    <xsl:template name="capacity">
        <xsl:value-of select="capacity/."/>
    </xsl:template>

</xsl:stylesheet>