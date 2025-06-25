<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <hotel>
            <xsl:for-each select="hotel/room">
                <room>
                    <number><xsl:call-template name="room_number"/></number>
                    <price><xsl:call-template name="room_price"/></price>
                    <cleaning_service><xsl:call-template name="room_cleaning_service"/></cleaning_service>
                    <reservation><xsl:call-template name="room_reservation"/></reservation>
                </room>
            </xsl:for-each>
        </hotel>
    </xsl:template>

    <xsl:template name="room_number">
        <xsl:value-of select="number"/>
    </xsl:template>

    <xsl:template name="room_price">
        <xsl:value-of select="price"/>
    </xsl:template>

    <xsl:template name="room_cleaning_service">
        <number_of_maids>
            <xsl:value-of select="cleaning_service/number_of_maids"/>
        </number_of_maids>
        <cleaning_duration>
            <xsl:value-of select="cleaning_service/cleaning_duration"/>
        </cleaning_duration>
        <number_of_cleanings_per_stay>
            <xsl:value-of select="cleaning_service/number_of_cleanings_per_stay"/>
        </number_of_cleanings_per_stay>
    </xsl:template>

    <xsl:template name="room_reservation">
        <guest_name>
            <xsl:value-of select="reservation/guest_name"/>
        </guest_name>
        <phone_number>
            <xsl:value-of select="reservation/phone_number"/>
        </phone_number>
        <check_in_date>
            <xsl:value-of select="reservation/check_in_date"/>
        </check_in_date>
        <check_out_date>
            <xsl:value-of select="reservation/check_out_date"/>
        </check_out_date>
    </xsl:template>

</xsl:stylesheet>